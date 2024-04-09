import { Component } from '@angular/core';

interface User {
  Username: string;
  Password: string;
  Profile_image:string;
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent {
  Users: User[] = [];
  Username: string = '';
  Password: string = '';
  Profile_image="https://www.pngall.com/wp-content/uploads/5/Profile.png";
  loggedIn: boolean = false; 

  constructor() {}

  ngOnInit() {}

  login() {
    if (this.Username === 'admin' && this.Password === 'admin') {
      const newUser: User = {
        Username: this.Username,
        Password: this.Password,
        Profile_image: this.Profile_image
      };
      alert("Login SuccessFull Now Add Users!")
      this.reset_bt();
      this.loggedIn = true;
    } else {
      alert('Invalid username or password');
    }
  }
  
  // Add new user
  addUser() {
    const newUser: User = {
      Username: this.Username,
      Password: this.Password,
      Profile_image: this.Profile_image,
    };
    this.Users.push(newUser);
   
    const index = this.Users.length - 1; 
   // this.userDetails(index); 
 
  }
  

// Display details of a specific user
userDetails(index: number) {
  if (index < 0 || index >= this.Users.length) {
    console.log('Index out of bounds or Users array is empty.');
    return;
  }

  const user = this.Users[index];
  if (!user) {
    console.log('User not found at index:', index);
    return;
  }

  console.log('User Details:', user);
}


  // Delete a user
  deleteUser(index: number) {
    if (confirm('Are you sure you want to delete this user?')) {
      this.Users.splice(index, 1);
    }
  }

  // Reset inputs
  reset_bt() {
    this.Username = '';
    this.Password = '';
    this.Profile_image = null;
  }
}
