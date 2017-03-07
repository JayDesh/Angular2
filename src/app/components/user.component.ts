import {Component} from '@angular/core';
import {PostsService} from '../services/posts.service';

@Component({
  moduleId: module.id,
  selector: 'user',
  templateUrl: 'user.component.html',
  providers: [PostsService]
})

export class UserComponent {
  name: string;
  email: string;
  address: address;
  hobbies: string[];
  showHobbies: boolean;
  posts: post[];

  constructor(private postsService: PostsService) {
    this.name = 'Jayesh Deshmukh';
    this.email = 'john@mail.com';
    this.address = {
      street: '12 Main St',
      city: 'Fremont'
    };
    this.hobbies = ['tennis', 'painting','running'];
    this.showHobbies = false;

    this.postsService.getPosts().subscribe(posts => {
        this.posts = posts;
        console.log (posts);
    });

  }

  toggleHobbies() {
    this.showHobbies = !this.showHobbies;
  }

  addHobbies(newHobby){
    console.log('adding new hobby');
    this.hobbies.push(newHobby);
  }

  deleteHobby(i){
    this.hobbies.splice(i,1);
  }
  interface address {
    street: string;
    city: string;
  }

  interface post{
    id: number;
    title: string;
    body: string;
  }

}
