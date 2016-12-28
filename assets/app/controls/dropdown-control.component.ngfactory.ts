/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/render/api';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from './dropdown-control.component';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/metadata/view';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from '@angular/common/src/directives/ng_for';
import * as import11 from '@angular/core/src/linker/template_ref';
import * as import12 from '@angular/core/src/change_detection/differs/iterable_differs';
var renderType_DropdownComponent_Host:import0.RenderComponentType = (null as any);
class _View_DropdownComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _DropdownComponent_0_4:import3.DropdownComponent;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_DropdownComponent_Host0,renderType_DropdownComponent_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.selectOrCreateHostElement('dropdown',rootSelector,(null as any));
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_DropdownComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._DropdownComponent_0_4 = new import3.DropdownComponent();
    this._appEl_0.initComponent(this._DropdownComponent_0_4,[],compView_0);
    compView_0.create(this._DropdownComponent_0_4,this.projectableNodes,(null as any));
    this.init([].concat([this._el_0]),[this._el_0],[],[]);
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import3.DropdownComponent) && (0 === requestNodeIndex))) { return this._DropdownComponent_0_4; }
    return notFoundResult;
  }
}
function viewFactory_DropdownComponent_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  if ((renderType_DropdownComponent_Host === (null as any))) { (renderType_DropdownComponent_Host = viewUtils.createRenderComponentType('',0,import8.ViewEncapsulation.None,[],{})); }
  return new _View_DropdownComponent_Host0(viewUtils,parentInjector,declarationEl);
}
export const DropdownComponentNgFactory:import9.ComponentFactory<import3.DropdownComponent> = new import9.ComponentFactory<import3.DropdownComponent>('dropdown',viewFactory_DropdownComponent_Host0,import3.DropdownComponent);
const styles_DropdownComponent:any[] = [];
var renderType_DropdownComponent:import0.RenderComponentType = (null as any);
class _View_DropdownComponent0 extends import1.AppView<import3.DropdownComponent> {
  _text_0:any;
  _el_1:any;
  _text_2:any;
  _el_3:any;
  _text_4:any;
  _el_5:any;
  _text_6:any;
  _text_7:any;
  _el_8:any;
  _text_9:any;
  _anchor_10:any;
  /*private*/ _appEl_10:import2.AppElement;
  _TemplateRef_10_5:any;
  _NgFor_10_6:import10.NgFor;
  _text_11:any;
  _text_12:any;
  _el_13:any;
  _text_14:any;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_DropdownComponent0,renderType_DropdownComponent,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n    ',(null as any));
    this._el_1 = this.renderer.createElement(parentRenderNode,'div',(null as any));
    this.renderer.setElementAttribute(this._el_1,'class','dropdown');
    this._text_2 = this.renderer.createText(this._el_1,'\n      ',(null as any));
    this._el_3 = this.renderer.createElement(this._el_1,'button',(null as any));
    this.renderer.setElementAttribute(this._el_3,'aria-expanded','true');
    this.renderer.setElementAttribute(this._el_3,'aria-haspopup','true');
    this.renderer.setElementAttribute(this._el_3,'class','btn btn-default dropdown-toggle');
    this.renderer.setElementAttribute(this._el_3,'data-toggle','dropdown');
    this.renderer.setElementAttribute(this._el_3,'id','dropdownMenu');
    this.renderer.setElementAttribute(this._el_3,'type','button');
    this._text_4 = this.renderer.createText(this._el_3,'',(null as any));
    this._el_5 = this.renderer.createElement(this._el_3,'span',(null as any));
    this.renderer.setElementAttribute(this._el_5,'class','caret');
    this._text_6 = this.renderer.createText(this._el_3,'\n      ',(null as any));
    this._text_7 = this.renderer.createText(this._el_1,'\n      ',(null as any));
    this._el_8 = this.renderer.createElement(this._el_1,'ul',(null as any));
    this.renderer.setElementAttribute(this._el_8,'aria-labelledby','dropdownMenu');
    this.renderer.setElementAttribute(this._el_8,'class','dropdown-menu');
    this._text_9 = this.renderer.createText(this._el_8,'\n        ',(null as any));
    this._anchor_10 = this.renderer.createTemplateAnchor(this._el_8,(null as any));
    this._appEl_10 = new import2.AppElement(10,8,this,this._anchor_10);
    this._TemplateRef_10_5 = new import11.TemplateRef_(this._appEl_10,viewFactory_DropdownComponent1);
    this._NgFor_10_6 = new import10.NgFor(this._appEl_10.vcRef,this._TemplateRef_10_5,this.parentInjector.get(import12.IterableDiffers),this.ref);
    this._text_11 = this.renderer.createText(this._el_8,'\n      ',(null as any));
    this._text_12 = this.renderer.createText(this._el_1,'\n    ',(null as any));
    this._el_13 = this.renderer.createElement(this._el_1,'div',(null as any));
    this._text_14 = this.renderer.createText(this._el_13,'\n  ',(null as any));
    this._expr_0 = import7.UNINITIALIZED;
    this._expr_1 = import7.UNINITIALIZED;
    this.init([],[
      this._text_0,
      this._el_1,
      this._text_2,
      this._el_3,
      this._text_4,
      this._el_5,
      this._text_6,
      this._text_7,
      this._el_8,
      this._text_9,
      this._anchor_10,
      this._text_11,
      this._text_12,
      this._el_13,
      this._text_14
    ]
    ,[],[]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import11.TemplateRef) && (10 === requestNodeIndex))) { return this._TemplateRef_10_5; }
    if (((token === import10.NgFor) && (10 === requestNodeIndex))) { return this._NgFor_10_6; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    var changes:{[key: string]:import7.SimpleChange} = (null as any);
    changes = (null as any);
    const currVal_1:any = this.context.values;
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this._NgFor_10_6.ngForOf = currVal_1;
      if ((changes === (null as any))) { (changes = {}); }
      changes['ngForOf'] = new import7.SimpleChange(this._expr_1,currVal_1);
      this._expr_1 = currVal_1;
    }
    if ((changes !== (null as any))) { this._NgFor_10_6.ngOnChanges(changes); }
    if (!throwOnChange) { this._NgFor_10_6.ngDoCheck(); }
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_0:any = import4.interpolate(1,'\n        ',(this.context.selected? this.context.selected.label: this.context.placeHolder),'\n        ');
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this.renderer.setText(this._text_4,currVal_0);
      this._expr_0 = currVal_0;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
}
export function viewFactory_DropdownComponent0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<import3.DropdownComponent> {
  if ((renderType_DropdownComponent === (null as any))) { (renderType_DropdownComponent = viewUtils.createRenderComponentType('/home/ubuntu/workspace/fcc-app-voting/assets/app/controls/dropdown-control.component.ts class DropdownComponent - inline template',0,import8.ViewEncapsulation.None,styles_DropdownComponent,{})); }
  return new _View_DropdownComponent0(viewUtils,parentInjector,declarationEl);
}
class _View_DropdownComponent1 extends import1.AppView<any> {
  _el_0:any;
  _el_1:any;
  _text_2:any;
  /*private*/ _expr_1:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_DropdownComponent1,renderType_DropdownComponent,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'li',(null as any));
    this._el_1 = this.renderer.createElement(this._el_0,'a',(null as any));
    this._text_2 = this.renderer.createText(this._el_1,'',(null as any));
    var disposable_0:Function = this.renderer.listen(this._el_0,'click',this.eventHandler(this._handle_click_0_0.bind(this)));
    this._expr_1 = import7.UNINITIALIZED;
    this.init([].concat([this._el_0]),[
      this._el_0,
      this._el_1,
      this._text_2
    ]
    ,[disposable_0],[]);
    return (null as any);
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_1:any = import4.interpolate(1,'',this.context.$implicit.label,'');
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this.renderer.setText(this._text_2,currVal_1);
      this._expr_1 = currVal_1;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
  private _handle_click_0_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.parent.context.selectItem(this.context.$implicit)) !== false);
    return (true && pd_0);
  }
}
function viewFactory_DropdownComponent1(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_DropdownComponent1(viewUtils,parentInjector,declarationEl);
}