import React from 'react'
import Slide from 'rc-slider/lib/Slider'
import 'rc-slider/assets/index.css'
import './style.css'

export default function Slider(props) {
	return (
		<div className='flexible' style={{ flexDirection: 'column', marginBottom: 16 }}>
			<div className='flexible' style={{ flexDirection: 'row', marginBottom: 16 }}>
				<div className='flexible' style={{ height: 85, alignItems: 'center' }}>
					<span className='sliderTitle'>{props.title}</span>		
				</div>
				<div className='flexible' style={{ height: 85, position: 'relative', alignItems: 'center',}}>
					<div className='flexible' style={{ flexDirection: 'row', width: props.price ? 200 : 70, borderRadius: 4, border: '1px solid rgba(22, 22,22 ,0.24)', height: 60, position: 'absolute', right: 0, alignItems: 'center' }}>
						<div className='flexible' >
							{
								props.price &&
								<span style={{ left: 16, fontSize: 26, marginLeft: 12, marginRight: 15, color: '#161616', opacity: 0.24, fontFamily: 'Roboto', fontWeight: 500, lineHeight: 1.67, letterSpacing: 0.51 }}>
									$
								</span>
							}
						</div>
						<div>
							<span style={{
								fontFamily: 'Roboto',
								fontSize: 36,
								fontWeight: 500,
								lineHeight: 1.11,
								letterSpacing: 0.77,
								color: '#161616',
								paddingLeft: props.price ? 32 : 0,
								paddingRight: 8
							}}>
								{props.value}
							</span>
						</div>
					</div>
				</div>
			</div>
			<div className='flexible'>
				<Slide handleStyle={{
					borderColor: '#071eb3',
					height: 16,
					width: 16,
					borderWidth: 5,
					backgroundColor: 'white',
				}} trackStyle={{ backgroundColor: '#071eb3', height: 6 }} onChange={props.onChange} value={props.sliderVal} step={props.step || 0.001} min={props.min} max={props.max}/>
			</div>
		</div>
	)
}
