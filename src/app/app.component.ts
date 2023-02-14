import { Component, ViewChild } from '@angular/core';
import { PostComponent } from "./components/post/post.component";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  /* title = 'oct-academy';
  parentMessage = 'Message coming from parent component';
  @ViewChild(PostComponent) childComp?: PostComponent;
  message?: string;
  messageFromOutput?: string;

  constructor() {
  }

  ngOnInit() {
  }

  getMessage(message: string) {
    this.messageFromOutput = message;
  }

  ngAfterViewInit() {
    this.message = this.childComp?.childMessage;
  } */

  /*   message = "Message from typescript component file"
    imageUrl = "https://www.ers.ga.gov/sites/main/files/imagecache/thumbnail/main-images/camera_lense_0.jpeg"
    bool = false;
    username_ = ""
  
    onClick() {
      console.log('Clicked')
    }
  
    onKeyUp(value: string) {
      console.log(value)
    } */


  /*   postArr = [
      {
        id: 1,
        content: 'Post 1'
      },
      {
        id: 2,
        content: 'Post 2'
      },
      {
        id: 3,
        content: 'Post 3'
      },
      {
        id: 4,
        content: 'Post 4'
      },
    ]
    
    addNew() {
      this.postArr.push(
        {id: Math.floor(Math.random() * 100), content: 'asdf'}
      )
    }
    
    onDelete(post: any) {
      let index = this.postArr.indexOf(post);
      this.postArr.splice(index,1)
    } */

  // stepForm = '';

  // isActive = false;

  title = 'Angular course';
  count = 285645;

  user = {
    city: 'Rio de Janeiro',
    coutry: 'Brasil'
  }

  lorem = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis cupiditate quidem voluptas, harum illo necessitatibus fugiat non fuga, nemo tempora dolores sit, excepturi nihil. Animi quae doloribus iste officia, quasi eligendi maxime cum numquam eius doloremque inventore commodi exercitationem asperiores velit blanditiis laboriosam repellat dolor laudantium voluptatum molestiae recusandae vero?'
}
