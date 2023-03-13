import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class PeopleListComponent extends Component {
  @action
  showTable(table) {
    alert(`The table's name is ${table.name}!`);
  }
}
