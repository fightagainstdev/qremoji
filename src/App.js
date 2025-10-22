import React from 'react'
import './App.css'

function App() {
	return (
		<>
			<div id="app" className="app">
				<div class="overlay"></div>
				<div className="text">
					<span aria-label="emoji" role="img" id="emoji">
						😐
					</span>
					你的表情是<span id="textStatus">...</span>！
				</div>
				<div className="mockup">
					<div id="browser " className="browser">
						<div className="browserChrome">
							<div className="browserActions"></div>
						</div>
						<canvas id="canvas"> </canvas>
						<video id="video" width="540" height="405" muted autoPlay></video>
					</div>
				</div>
				<p className="note">你没有被录制，一切都在你自己的浏览器中进行！</p>
			</div>
		</>
	)
}

export default App
