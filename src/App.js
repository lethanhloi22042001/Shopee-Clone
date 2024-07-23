import Head from './component/Layout/Head';
import Footer from './component/Layout/Footer';
import MenuLeft from './component/Layout/MenuLeft';
import MenuRight from './component/Layout/MenuRight';
function App() {
  return (
		<>
			<Head/>
				<section>
					<div className='container'>
						<div className='row'>
							<MenuLeft/>
							<MenuRight/>
								{/* {props.children} */}
						</div>
					</div>
				</section>	
			<Footer/>
		</>
  );
}

export default App;
