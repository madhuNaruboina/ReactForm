import React, {Component} from 'react';
import form  from '../Form/form.css'

export default class SimpleForm extends React.Component {
    submitForm() {
      alert("Hi")
    };
    render(){    
        return(
            <div>
                <div align="center">
                <h2 >Welcome to React form</h2>
                <div>
                <form >
                    <label for="fname" >First Name</label>
                    <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
                    <label for="lname">Last Name</label>
                     <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>
                    <div>
                        <label>Gender: </label>
                        <input type="radio" value="Male" name="gender" /> Male
                         <input type="radio" value="Female" name="gender" /> Female
                         <input type="radio" value="Other" name="gender" /> Other
                      </div>
                      <div>
                          <h3>
                             Desgination
                          </h3>
                          <input type="checkbox" id="javaD" name="peripherals" value="screen"/>
                            <label for="javaD"> Java Developer</label>
                            <input type="checkbox" id="ReactD" name="peripherals" value="keyboard"/>
                            <label for="ReactD"> ReactJs Developer</label>
                            <input type="checkbox" id="FullstackD" name="peripherals" value="mouse"/>
                                <label for="FullstackD"> Fullstack Developer</label>
                      </div>
                    <div>
                       


<input type="submit" onclick="submitForm()" value="Submit"/>
<input type="reset" onclick="cancelForm()" value="Reset"/>

                    </div>
                   
                </form>
                </div>
            </div>
            </div>
        )
    }
}
