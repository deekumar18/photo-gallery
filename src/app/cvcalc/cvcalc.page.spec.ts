import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CvcalcPage } from './cvcalc.page';

describe('CvcalcPage', () => {
  let component: CvcalcPage;
  let fixture: ComponentFixture<CvcalcPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvcalcPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CvcalcPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
