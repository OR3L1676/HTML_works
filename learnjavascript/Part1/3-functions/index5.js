// changing 'this'

const video = {
    title: 'a',
    play() {
        console.log(this);
    },
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach((tag)=> { // has been solved by changing to arrow function
            console.log(this.title, tag);
        }) // }.bind(this))
    }
  };

  video.showTags();

  function playVideo(a, b) {
    console.log(this);
  }

  playVideo.call({ name: 'orel' }, 1, 2);
  playVideo.apply({ name: 'orel' },[1, 2]);
  const fn =  playVideo.bind({ name: 'orel' });
  fn();
  playVideo();