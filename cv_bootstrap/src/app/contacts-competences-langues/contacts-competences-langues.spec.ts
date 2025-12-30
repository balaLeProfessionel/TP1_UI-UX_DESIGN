import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsCompetencesLangues } from './contacts-competences-langues';

describe('ContactsCompetencesLangues', () => {
  let component: ContactsCompetencesLangues;
  let fixture: ComponentFixture<ContactsCompetencesLangues>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactsCompetencesLangues]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactsCompetencesLangues);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
