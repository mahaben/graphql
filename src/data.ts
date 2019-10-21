export interface ProjectData {
  id: number;
  name: string;
}

export interface TaskData {
  id: number;
  title: string;
  completed: boolean;
  project_id: number;
}

export const projects: ProjectData[] = [
  { id: 1, name: "Learn React Native" },
  { id: 2, name: "Workout" },
];


export const tasks: TaskData[] = [];

export function initData() {
  for(let i = 0; i< 1200; i++) {
    tasks.push({ id: 1, title: "Install Node", completed: true, project_id: 1 });
  }
}


