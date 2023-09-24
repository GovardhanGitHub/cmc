import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/student.service';

@Component({
  selector: 'app-index6',
  templateUrl: './index6.component.html',
  styleUrls: ['./index6.component.scss']
})
/**
 * Index-6 component
 */
export class Index6Component implements OnInit {

  constructor(private studentService : StudentService) { }

  currentSection = 'home';
  students
  student

   ngOnInit() {


    // this.students =  this.studentService.getAllStudents();
    // console.log("students : ",this.students);

    // this.student =  this.studentService.insertStudent();
    // console.log("student : ",this.student);
    

    // this.studentService.makeHttpRequest().subscribe(
    //   (response) => {
    //     // Handle the response here
    //     console.log(response);
    //   },
    //   (error) => {
    //     // Handle errors here
    //     console.error(error);
    //   }
    // );


    document.addEventListener("DOMContentLoaded", () => {
      let i = 1;
      setInterval(() => {
        const slideImage = document.querySelector("#isSlideImage") as HTMLImageElement; // Cast to HTMLImageElement
        if (!slideImage) {
          return; // Exit if the element is not found
        }
    
        if (i === 1) {
          slideImage.src = 'assets/images/cmc/drapt2.jpeg';
        } else if (i === 2) {
          slideImage.src = 'assets/images/cmc/CMCH_Vellore.jpeg';
        } else {
          slideImage.src = 'assets/images/cmc/ranipet-Kannigapuram-2022-06-15-main-entrance-signsWA-1.jpeg';
        }
    
        if (i >= 3) {
          i = 0;
        }
        i++;
      }, 2500);
    });
    
    



    // let i = 1;
    // setInterval(() => {
    //   if (i === 1) { (<HTMLImageElement>document.querySelector("#isSlideImage")).src = 'assets/images/cmc/drapt2.jpeg'; }
    //   else if (i === 2) { (<HTMLImageElement>document.querySelector("#isSlideImage")).src = 'assets/images/cmc/CMCH_Vellore.jpeg'; }
    //   else { (<HTMLImageElement>document.querySelector("#isSlideImage")).src = 'assets/images/cmc/ranipet-Kannigapuram-2022-06-15-main-entrance-signsWA-1.jpeg'; }
    //   if (i >= 3) { i = 0; }
    //   i++;
    // }, 2500);
  }

  /**
   * Window scroll method
   */
  // tslint:disable-next-line: typedef
  windowScroll() {
    const navbar = document.getElementById('navbar');
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
      navbar.style.backgroundColor = '#1a1a1a';
      navbar.style.padding = '15px 0px';
    }
    else {
      navbar.style.backgroundColor = '';
      navbar.style.padding = '20px';
    }
  }

  /**
   * Toggle navbar
   */
  toggleMenu() {
    document.getElementById('navbarCollapse').classList.toggle('show');
  }

  /**
   * Section changed method
   * @param sectionId specify the current sectionID
   */
  onSectionChange(sectionId: string) {
    this.currentSection = sectionId;
  }
}
