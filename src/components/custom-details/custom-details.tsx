import { Component, Method } from '@stencil/core';

@Component({
    tag: 'custom-details',
    styleUrl: 'custom-details.scss',
})
export class WebComponent {
    render() {
        return [
            <div class="details">This is the "custom-details"</div>
        ];
    }
    @Method()
    sayHelloWorldOnConsole() {
        console.log('Hello World!');
    }
    //*
    @Method()
    getDefaultKnobEPosition(): Anchor {
        return Anchor.Left;
    }
    //*/
}
export enum Anchor {
    Left = 'left',
    Center = 'center',
    Right = 'right',
}
