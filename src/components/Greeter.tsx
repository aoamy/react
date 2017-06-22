// ------------------------------------------------------------------------------
//
// React基础组件测试
// class: Greeter
// author: 喵大斯( h5devs.com/h5devs.net )
// created: 2017/6/21
// copyright (c) 2015 喵大斯( aosnow@yeah.net )
//
// ------------------------------------------------------------------------------
import * as React from 'react';
import '../css/Greeter';

export interface IInfo
{
	name:string;
}
export default class Greeter extends React.Component<IInfo, IInfo>
{
	// --------------------------------------------------------------------------
	//
	//  Class constructor
	//
	// --------------------------------------------------------------------------

	public constructor()
	{
		super();
	}

	// --------------------------------------------------------------------------
	//
	// Class properties
	//
	// --------------------------------------------------------------------------

	// --------------------------------------------------------------------------
	//
	// Class methods
	//
	// --------------------------------------------------------------------------

	public  render()
	{
		return (
			<div>
				<div className="title">
					<h2>Hello {this.props.name}</h2>
				</div>
				<p>Good!</p>
			</div>
		);
	}

}
