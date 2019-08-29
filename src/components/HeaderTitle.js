import React from 'react'
import './style.css'

export default function HeaderTitle(props) {
	// if(props.calculator) {
		return(
			<div style={{ display: 'block', marginTop: 120 }}>
				{props.title && <div style={{ marginBottom: props.subtitle ? 21 : 0, width: props.width ? props.width : 350 }}>
					<span className='title' style={{ color: 'white', backgroundColor: '#071eb3', padding: 8, marginBottom: 4 }}>{ props.title } </span>
					{/* <span className='title' style={{ color: 'white', backgroundColor: '#071eb3', padding: 8 }}>Bellotero.io</span> */}
				</div>}
			{props.subtitle &&	<div style={{ width: 350, textAlign: 'left' }}>
					{ props.subtitle }
				</div>}
			</div>
		)
	// }
	// return null
}