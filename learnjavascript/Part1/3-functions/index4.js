  
  // explenation about this keyword
  // 1. method -> obj
  // 2. function -> global (window, gloabl)
  
  // 1.
  const video = {
    title: 'a',
    play() {
        console.log(this);
    },
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(function(tag) {
            console.log(this.title, tag);
        }, this)
    }
  };

  video.stop = function() {
    console.log(this)
  };
  
  video.stop();

  // 2.
  function playVideo() {
    console.log(this);
  }

  playVideo();
  
  // 1.
  function Video(title) {
    this.title = title;
    console.log(this);
  }
  const v = new Video('b');

//---------------------
  video.showTags();