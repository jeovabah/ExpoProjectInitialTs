interface Props {
  condition: any
  children: any
}

export const If = ({ condition, children }: Props) => {
  return condition ? children : null
}
