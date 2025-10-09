// Create a class named Video
class Video {
  constructor(title, uploader, time) {
    this.title = title;
    this.uploader = uploader;
    this.time = time;
  }

  // Create a method called watch()
  watch() {
    console.log(`${this.uploader} watched all ${this.time} seconds of "${this.title}"!`);
  }
}

// Instantiate a new Video instance and call the watch() method
const video1 = new Video("JavaScript Crash Course", "John Doe", 600);
video1.watch();

// Instantiate a second Video instance with different values
const video2 = new Video("Learn HTML in 1 Hour", "Jane Smith", 3600);
video2.watch();

// BONUS: Use an array to store data for five Video instances
const videoData = [
  ["CSS Animations", "Mike", 300],
  ["React for Beginners", "Sara", 1800],
  ["Node.js Tutorial", "Ali", 2400],
  ["Python Basics", "Emma", 1200],
  ["Flask Web App", "Noah", 1500]
];

// BONUS: Loop through the array to instantiate those instances
const videos = videoData.map(([title, uploader, time]) => new Video(title, uploader, time));

// Call watch() for each instance
videos.forEach(video => video.watch());
