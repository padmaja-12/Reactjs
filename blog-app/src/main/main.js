import React, {Component} from 'react';

class Main extends Component {
    render() {

         return (
            <div class="container">
                <nav class="navbar">
              <ul>
                <li>
                <a href="#">
                  <i class="fas fa-user-friends"></i>
                </a>
                <p>Following</p>
                </li>
                <li>
                  <a href="#">
                    <i class="fas fa-comment-alt"></i>
                  </a>
                <p>Messages</p>
                </li>
                <li>
                  <a href="#"><img src="./img/logo.svg" alt=""></img>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fas fa-user"></i>
                  </a>
                <p>Profile</p>
                </li>
                <li>
                  <a href="#">
                    <i class="fas fa-cog"></i>
                  </a>
                <p>Settings</p>
                </li>
              </ul>
            </nav>
        
            <main>
              <div class="image-section-container">
                <div class="image-container">
                  <img class="screen-reader-only" src="./img/photo.jpg" alt="woman and child walking on cobblestone street"></img>
                  <i class="fas fa-caret-left"></i>
                  <i class="fas fa-caret-right"></i>
                  <div class="radio-row">
                    <input id="image-1" name="image-selector" type="radio"></input>
                    <label for="image-1"></label>
                    <input id="image-2" checked name="image-selector" type="radio"></input>
                    <label for="image-2"></label>
                    <input id="image-3" name="image-selector" type="radio"></input>
                    <label for="image-3"></label>
                    <input id="image-4" name="image-selector" type="radio"></input>
                    <label for="image-4"></label>
                    <input id="image-5" name="image-selector" type="radio"></input>
                    <label for="image-5"></label>
                  </div>
                </div>
              </div>
                <div class="headings-container">
                  <h1>
                    Skye Gillen <span class="post-year">2020</span>
                  </h1>
                  <h2>
                    @skyegillen
                  </h2>
                </div>
              <div class="post-section-container">
                <h3>
                  Lorem Epsum Title
                </h3>
                <article data-simplebar data-simplebar-auto-hide="false" class="post-section-content">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </article>
              <div class="action-bar">
                <div class="action-bar-icons-row">
                  <ul>
                    <li>
                      <a href="#" aria-labelledby="follow-label">
                        <i class="fas fa-plus"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" aria-labelledby="comment-label">
                        <i class="fas fa-comment-alt"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" aria-labelledby="like-label">
                        <i class="fas fa-heart"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                  <div class="action-bar-titles-row">
                    <p id="follow-label">Follow</p>
                    <p id="comment-label">Comment</p>
                    <p id="like-label">Like</p>
                  </div>
               </div>
              </div>
            <div class="exit-button">
              &times;
            </div>
            </main>
          </div>
         );
    };
};

export default Main;