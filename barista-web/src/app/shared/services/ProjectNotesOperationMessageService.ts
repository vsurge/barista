import { ProjectNote } from '@app/shared/api';
import { MessageServiceBase } from '@app/shared/services/MessageServiceBase';

export class ProjectNotesOperationMessageService extends MessageServiceBase<ProjectNote> {
  send(projectNote: ProjectNote) {
    super.internalSend('project-note-operation', projectNote);
  }
}
