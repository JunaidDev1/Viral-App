import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RoastBattlePage } from './roast-battle.page';

describe('RoastBattlePage', () => {
  let component: RoastBattlePage;
  let fixture: ComponentFixture<RoastBattlePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoastBattlePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RoastBattlePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
