import { Component, Element, State } from '@stencil/core';

@Component({
	tag: 'custom-container',
	styleUrl: 'custom-container.scss',
})
export class WebComponent {
	@Element() el!: HTMLStencilElement;
	@State() label: String = '<empty>';
	componentDidLoad() {
		document.querySelector('.button_get_anchor').addEventListener('click', () => {
			let position = '<unset>';
			position = this.el.querySelector('custom-details').getDefaultKnobEPosition();
			this.label = position;
		});
	}
	render() {
		return [
			<div class="label">{this.label}</div>,
			<custom-details></custom-details>,
			<div>
				<button class="button_get_anchor">Get Anchor</button>
			</div>
		];
	}
}
