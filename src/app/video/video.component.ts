import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {


  src = 'assets/video/covid.mp4';

  video: HTMLVideoElement;

  constructor() { }

  ngOnInit(): void {

    setTimeout(() => {

      this.toFullScreen();
    }, 25000);
  }


  toFullScreen(): void {
    console.log('document.fullscreenEnabled: ', document.fullscreenEnabled);

    if (!document.fullscreenElement) {

      this.video = document.querySelector('#videoPlayer');
      this.video.className = 'fullscreen';
      this.video.requestFullscreen()
        .then(res => console.log('res: ', res))
        .catch(err => console.log('err: ', err));

    }

  }
}
