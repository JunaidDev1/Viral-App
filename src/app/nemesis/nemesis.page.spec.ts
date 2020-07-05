import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NemesisPage } from './nemesis.page';

describe('NemesisPage', () => {
  let component: NemesisPage;
  let fixture: ComponentFixture<NemesisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NemesisPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NemesisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
