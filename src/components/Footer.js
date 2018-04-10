import React, {Component} from 'react';

class Footer extends Component{
  render(){
    return (
      <footer>
        <div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1 col-sm-12 col-xs-12">
        <ul>
          <li>
            <a href="https://github.com/nnedevn" target="_blank" class="ion-social-github"></a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/nedevn" target="_blank" class="ion-social-linkedin"></a>
          </li>
        </ul>
      </div>
      </footer>
    )
  }
}

export default Footer;