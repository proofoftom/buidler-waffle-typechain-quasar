import { counter } from './loadCounter';

export function init (context: any) {
  context.commit('updateCount');
}

export async function decrement (context: any) {
  await counter.countDown();
  context.commit('updateCount');
}

export async function increment (context: any) {
  await counter.countUp();
  context.commit('updateCount');
}
