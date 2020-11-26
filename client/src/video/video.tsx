class Video {
  private _video: HTMLVideoElement;

  constructor() {
    this._video = document.createElement('video');
    this._video.preload = 'auto';
  }

  // getter
  getVideo = () => {
    return this._video;
  };

  getDuration = () => {
    return this._video.duration;
  };

  getVideoWidth = () => {
    return this._video.videoWidth;
  };

  getVideoHeight = () => {
    return this._video.videoHeight;
  };

  getSrc = () => {
    return this._video.src;
  };

  getCurrentTime = () => {
    return this._video.currentTime;
  };

  // setter
  setSrc = (src: string) => {
    this._video.src = src;
  };

  setCurrentTime = (time: number) => {
    this._video.currentTime = time;
  };

  revoke = () => {
    if (this.getSrc()) {
      URL.revokeObjectURL(this.getSrc());
      this._video.removeAttribute('src');
      this.load();
    }
  };

  play = () => {
    this._video.play();
  };

  pause = () => {
    this._video.pause();
  };

  load = () => {
    this._video.load();
  };

  addEventListener = (
    event: string,
    callback: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions
  ) => {
    this._video.addEventListener(event, callback, options);
  };

  removeEventListener = (
    event: string,
    callback: EventListenerOrEventListenerObject,
    options?: boolean | EventListenerOptions
  ) => {
    this._video.removeEventListener(event, callback, options);
  };
}

export default new Video();
