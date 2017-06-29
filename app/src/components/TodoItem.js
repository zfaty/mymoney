import Realm from 'realm';

class TodoItem {
  static get () { return realm.objects(TodoItem.schema.name) }
  static schema = {
    name: 'TodoItem',
    primaryKey: 'id',
    properties: {
      id: {type: 'string'},
      value: {type: 'string'},
      completed: {type: 'bool', default: false},
      createdTimestamp: {type: 'date'}
    }
  }
  _onPress(event) {
      console.log('press',this.state.text);
      realm.write(() => {
        realm.create(TodoItem.schema.name, {
          id: this.state.text,
          value : this.state.text,
          createdTimestamp: new Date()
        })
      }); 
      this.forceUpdate();
  }
}
// Create Realm DB
const realm = new Realm({schema: [TodoItem]});

export default TodoItem;

  // constructor() {
  //   super();
  //   const ds = new ListView.DataSource({
  //       rowHasChanged(a, b) {
  //           // Always re-render TodoList items.
  //           return a.value !== b.value ;
  //       }
  //   });
  //   let todoItems = realm.objects(TodoItem.schema.name);
  //   this.state = {
  //     dataSource: ds.cloneWithRows(todoItems),
  //     text : ''
  //   };

  //   this._onPress = this._onPress.bind(this);
  //   this._onChange = this._onChange.bind(this);
  // }