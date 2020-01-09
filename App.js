import React, { Component } from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import Randomizer from './components/Randomizer';
import SplashScreen from './components/splashScreen';

export default class App extends Component {

	constructor(props) {
		super(props)
		this.state = {
			isLoading: true,
		}
	}

	performTimeConsumingTask = async () => {
		return new Promise((resolve) =>
			setTimeout( 
				() => {
					resolve('result')
				},
				2000
			)
		);
	}

	async componentDidMount() {
		const data = await this.performTimeConsumingTask();

		if (data !== null) {
			this.setState({
				isLoading: false
			});
		}
	}

	render() {
		if (this.state.isLoading) {
			return <SplashScreen />
		}
		return ( 
			<View style = { styles.body }>
				<StatusBar 
					backgroundColor = "#813434" 
				/>
				<Randomizer />
			</View>  
		);
	}
}


const styles = StyleSheet.create({
	body: {
		height: '100%',
		width: '100%',
		backgroundColor: '#813434',
	}
});