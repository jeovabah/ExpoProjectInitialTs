import { BottomSheetModal, BottomSheetBackdrop } from '@gorhom/bottom-sheet'
import { useCallback, useMemo } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { ContainerData } from './styles'
import { ModalArrastable } from '~components/ModalArrastable'

interface Props {
  refCar: any
  car: any
  visible: boolean
  setVisible?: any
}

export const ModalCar = ({ refCar, car, visible, setVisible }: Props) => {
  const snapPoints = useMemo(() => ['25%', '50%'], [])

  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index)
  }, [])

  const renderBackdrop = useCallback(
    (props: any) => <BottomSheetBackdrop {...props} disappearsOnIndex={-1} appearsOnIndex={0} />,
    []
  )

  const closeModal = useCallback(() => {
    renderBackdrop(false)
  }, [])

  return <ModalArrastable visible={visible} setVisible={setVisible} data={car} />
}
