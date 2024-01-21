import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilhoOutputComponent } from './filho-output.component';

describe('FilhoOutputComponent', () => {
  let component: FilhoOutputComponent;
  let fixture: ComponentFixture<FilhoOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilhoOutputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FilhoOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
