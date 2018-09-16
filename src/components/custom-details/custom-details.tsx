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
        return 'left';
    }
    //*/
}
/*
workaround based Ionic component: range
On the following file:
https://github.com/ionic-team/ionic/blob/master/core/src/components/range/range-interface.ts
it is used the following:
export type Knob = 'A' | 'B' | undefined;
*/
export type Anchor = 'left' | 'center' | 'right';
