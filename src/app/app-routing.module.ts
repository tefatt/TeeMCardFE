import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PageNotFoundComponent} from './page-not-found.component';
import {DeckCreateComponent} from './components/deck/deck-create/deck-create.component';
import {DeckDetailsComponent} from './components/deck/deck-details/deck-details.component';


const routes: Routes = [{path: 'decks/new', component: DeckCreateComponent},
  {path: 'decks/details', component: DeckDetailsComponent},
  {path: '**', component: PageNotFoundComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
