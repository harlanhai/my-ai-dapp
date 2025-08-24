/**
 * 1. 方便做 diff 避免无意义的渲染
 * 2. 只拷贝变动的节点，其余部分保持引用不变（结构共享）
 * 3. 不会意外底改坏原始数据
 * 4. 创建新结构，属于V8底层的快对象，性能更好
 */
import { useCallback, useState } from 'react'
import { Draft, freeze, produce } from 'immer'

// 这里的  Draft<S> 是 immer 库中的类型，用于表示可变的草稿状态
export type DraftFunction<S> = (draft: Draft<S>) => void;
// Updater<S> 函数签名接受一个参数 arg，类型是 S | DraftFunction<S> 返回 void
export type Updater<S> = (arg: S | DraftFunction<S>) => void;
// 返回一个元祖类型
export type ImmerHook<S> = [S, updater: Updater<S>];

/**
 * 函数签名
 * @param initialValue 类型是 S | () => S 
 * @return [state, setState]
 */
export function useImmer<S = unknown>(initialValue: S | (() => S)) : ImmerHook<S>;

// 函数封装
export function useImmer<T>(initialValue: T){
  const [val, updateValue] = useState(
    freeze(typeof initialValue === 'function' ? initialValue() : initialValue, true)
  )
  return [val, useCallback((updater: T | DraftFunction<T>)=>{
    // 如果 updater 是函数类型，使用 produce 处理
    if(typeof updater === 'function') {
      updateValue(produce(updater as DraftFunction<T>));
    } else {
      // 否则直接更新值
      updateValue(freeze(updater))
    }
  }, [])]
}