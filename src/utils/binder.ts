import { createElement, FC, memo } from "react";

type Hook<Props, Result> = (props: Props) => Result;

export function binder<HookProps extends Record<string, unknown>, HookResult extends Record<string, unknown>>(
  hook: Hook<HookProps, HookResult>,
  ViewComponent: FC<HookResult>,
  options?: { displayName?: string, memoize?: boolean; }
) {
  const { displayName, memoize = true } = options ?? {};

  const Component: FC<HookProps> = props => {
    const ComponentToRender = memoize ? memo(ViewComponent) : ViewComponent;
    return createElement(ComponentToRender, hook(props));
  };

  Component.displayName = displayName;

  return Component;
}
