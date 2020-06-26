import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Routes from './utils/Routes';
import video from './video/video.mp4';

function App() {
	return (
		<section className="App">
			<div>
				<NavBar />
				<Routes />
			</div>
			<div className="video">
				<div className="video">
					<video title="storming" width="100%" autoPlay muted loop>
						<source src={video} type="video/mp4" />
					</video>
				</div>
			</div>
		</section>
	);
}

export default App;
