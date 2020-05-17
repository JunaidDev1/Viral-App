import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JoinNemesisPage } from './join-nemesis.page';

describe('JoinNemesisPage', () => {
  let component: JoinNemesisPage;
  let fixture: ComponentFixture<JoinNemesisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoinNemesisPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JoinNemesisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
