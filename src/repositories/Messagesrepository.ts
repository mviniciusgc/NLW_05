import { EntityRepository, Repository } from 'typeorm'
import { Message } from '../entities/Messages'


@EntityRepository(Message)
class Messagesrepository extends Repository<Message> {}

export { Messagesrepository };