import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VisualPage } from './visual.page';

describe('VisualPage', () => {
  let component: VisualPage;
  let fixture: ComponentFixture<VisualPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VisualPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
