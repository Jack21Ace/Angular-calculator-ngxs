import { Injectable } from '@angular/core';
import { State, Action, StateContext } from '@ngxs/store';
import { PreocesoAction } from './preoceso.actions';

export class PreocesoStateModel {
  public items!: string[];
}

const defaults = {
  items: []
};

@State<PreocesoStateModel>({
  name: 'preoceso',
  defaults
})
@Injectable()
export class PreocesoState {
  @Action(PreocesoAction)
  add({ getState, setState }: StateContext<PreocesoStateModel>, { payload }: PreocesoAction) {
    const state = getState();
    setState({ items: [ ...state.items, payload ] });
  }
}
