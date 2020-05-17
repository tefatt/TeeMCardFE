import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PageNotFoundComponent} from './page-not-found.component';
import {DeckCreateComponent} from './components/deck/deck-create/deck-create.component';
import {DeckEditComponent} from './components/deck/deck-edit/deck-edit.component';
import {DeckDetailsComponent} from './components/deck/deck-details/deck-details.component';
import {PracticeComponent} from './components/consumption/practice/practice.component';
import {ChallengeComponent} from './components/consumption/challenge/challenge.component';


const routes: Routes = [
  {path: 'deck/create', component: DeckCreateComponent},
  {path: 'deck/edit/:id', component: DeckEditComponent},
  {path: 'deck/details', component: DeckDetailsComponent},
  {path: 'practice/:id', component: PracticeComponent},
  {path: 'challenge', component: ChallengeComponent},
  {path: '**', component: PageNotFoundComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
