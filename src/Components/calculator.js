// Imports.
import React from 'react';
import CalculatorTitle from './calculatorTitle.js';
import OutputScreen from './outputScreen.js';
import Button from './button.js';

class Calculator extends React.Component {

    constructor() {
        super();
        // set our default state
        this.state = {
            question: '',
            answer: ''
        }


        this.handleClick = this.handleClick.bind(this);
    }


    render() {
        return (
            <div className="frame">
                <CalculatorTitle value="Calculator" />
                <div class="mainCalc">
                    <OutputScreen answer={this.state.answer} question={this.state.question} />
                    <div className="button-row" id='brow'>
                        <Button label={'C'} handleClick={this.handleClick} />
                        <Button label={'Del'} handleClick={this.handleClick} />
                        <Button label={'.'} handleClick={this.handleClick} />
                        <Button label={'/'} handleClick={this.handleClick} />
                    </div>
                    <div className="button-row">
                        <Button label={'7'} handleClick={this.handleClick} />
                        <Button label={'8'} handleClick={this.handleClick} />
                        <Button label={'9'} handleClick={this.handleClick} />
                        <Button label={'*'} handleClick={this.handleClick} />
                    </div>
                    <div className="button-row">
                        <Button label={'4'} handleClick={this.handleClick} />
                        <Button label={'5'} handleClick={this.handleClick} />
                        <Button label={'6'} handleClick={this.handleClick} />
                        <Button label={'-'} handleClick={this.handleClick} />
                    </div>
                    <div className="button-row">
                        <Button label={'1'} handleClick={this.handleClick} />
                        <Button label={'2'} handleClick={this.handleClick} />
                        <Button label={'3'} handleClick={this.handleClick} />
                        <Button label={'+'} handleClick={this.handleClick} />
                    </div>
                    <div className="button-row">
                        <Button label={'0'} handleClick={this.handleClick} />
                        <Button label={'='} handleClick={this.handleClick} />
                    </div>
                </div>
            </div>
        );
    }


    handleClick(event) {


        const value = event.target.value;

        switch (value) {
            case '=': {
                if (this.state.question !== '') {
                    var ans = '';
                    try {
                        ans = eval(this.state.question);
                    }
                    catch (err) {
                        this.setState({ answer: "Math Error" });
                    }
                    if (ans === undefined)
                        this.setState({ answer: "Math Error" });
                    // update answer in our state.
                    else
                        this.setState({ answer: ans, question: '' });
                    break;
                }
            }
            case 'C': {
                // if it's the clr sign,clean the
                // question and answer in the state
                this.setState({ question: '', answer: '' });
                break;
            }

            case 'Del': {
                var str = this.state.question;
                str = str.substr(0, str.length - 1);
                this.setState({ question: str });
                break;
            }

            default: {
                // for every other commmand, update the answer in the state
                this.setState({ question: this.state.question += value })
                break;
            }
        }
    }

}

// Export Calculator Component.
export default Calculator;
