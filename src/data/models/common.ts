export type CommonResponse<T> = {
    success: boolean;
    error?: string
    data: T
}

export interface ProjectType {
  id: string;
  title: string;
  author: Author;
  changed: number;
  created: number;
  members: Author[];
  code: string;
}

export interface NewProject {
  id?: string;
  title: string;
  code: string;
}

export interface ProjectId {
  id: string;
}

export interface TaskId {
  id: string;
}

export interface Author {
  id: string;
  login: string;
  email: string;
  fio: string;
}

export interface TaskType {
  color: any;
  id: string;
  title: string;
  description?: string;
  changed: number;
  created: number;
  author: Author;
  type: number;
  executor: Author | null;
  taskIndex: number;
  status: number;
}

export interface NewTask {
  title: string;
  description: string;
  type: number;
  status: number;

}

interface Status {
  id: number;
  title: string;
  order: number;
}

export interface TaskGetByIdType {
  projectId: string;
  taskId: string;
}
