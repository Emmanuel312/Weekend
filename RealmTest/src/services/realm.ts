import Realm from 'realm';
import PostSchema from '../schemas/Post';

export default function getRealm() {
  return Realm.open({
    schema: [PostSchema],
  });
}
