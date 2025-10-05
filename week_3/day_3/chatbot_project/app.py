import streamlit as st
import os
from dotenv import load_dotenv
from langchain_community.chat_models import ChatOpenAI
from langchain.memory import ConversationBufferMemory
from langchain.chains import ConversationChain
from langchain.schema import HumanMessage, AIMessage

load_dotenv()

# Streamlit page config
st.set_page_config(
    page_title="AI Chatbot",
    layout="centered"
)

st.title("AI Chatbot")
st.subheader("Built with LangChain, OpenRouter, and Streamlit")

# Initialize chat history
if "chat_history" not in st.session_state:
    st.session_state.chat_history = []

# Initialize conversation if not present
if "conversation" not in st.session_state:

    # LLM using OpenRouter
    llm = ChatOpenAI(
        model_name="openrouter/auto",  # OpenRouter model
        openai_api_base="https://openrouter.ai/api/v1",
        openai_api_key=os.getenv("OPENROUTER_API_KEY"),
        temperature=0.7
    )

    # Conversation memory
    memory = ConversationBufferMemory(return_messages=True)

    # Conversation chain
    st.session_state.conversation = ConversationChain(
        llm=llm,
        memory=memory,
        verbose=False
    )

# Display previous messages
for message in st.session_state.chat_history:
    if isinstance(message, HumanMessage):
        with st.chat_message("user"):
            st.write(message.content)
    else:
        with st.chat_message("assistant"):
            st.write(message.content)

# Get user input
user_input = st.chat_input("Type your message here...")

if user_input:
    # Append user message to chat history
    st.session_state.chat_history.append(HumanMessage(content=user_input))

    with st.chat_message("user"):
        st.write(user_input)

    with st.chat_message("assistant"):
        with st.spinner("Thinking..."):
            # Use ConversationChain to get response
            response = st.session_state.conversation.predict(input=user_input)
            st.write(response)

    # Append AI response to chat history
    st.session_state.chat_history.append(AIMessage(content=response))

# Sidebar
with st.sidebar:
    st.title("Options")

    if st.button("Clear Chat History"):
        st.session_state.chat_history = []

        # Reinitialize LLM and memory
        llm = ChatOpenAI(
            model_name="openrouter/auto",
            openai_api_base="https://openrouter.ai/api/v1",
            openai_api_key=os.getenv("OPENROUTER_API_KEY"),
            temperature=0.7
        )

        memory = ConversationBufferMemory(return_messages=True)

        st.session_state.conversation = ConversationChain(
            llm=llm,
            memory=memory,
            verbose=False
        )

        st.stop()

    st.subheader("About")
    st.markdown("""
        This chatbot uses:

        - **Streamlit** for the web interface
        - **LangChain-community** for conversation management
        - **OpenRouter GPT model** as the language model
        - **ConversationBufferMemory** to remember previous messages
    """)
