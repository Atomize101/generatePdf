import React, { Component } from 'react';
import axios from 'axios';
import { saveAs } from 'file-saver';
//Setup

import './App.css';

function App() {
	return (
		<div className="App">
			<input type="text" placeholder="Name" name="name" onChange={this.handleChange} />
			<input type="text" placeholder="Name" name="name" onChange={this.handleChange} />
			<input type="text" placeholder="Name" name="name" onChange={this.handleChange} />
			<input type="text" placeholder="Name" name="name" onChange={this.handleChange} />
			<input type="text" placeholder="Name" name="name" onChange={this.handleChange} />
			<input type="text" placeholder="Name" name="name" onChange={this.handleChange} />
		</div>
	);
}

export default App;
