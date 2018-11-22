import EmailHistory from '../Models/EmailHistory';
import { Repository } from './Repository';

export default class EmailHistoryRepository extends Repository {
  Models() {
    return EmailHistory;
  }
}
