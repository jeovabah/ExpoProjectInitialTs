import { BottomSheetModal, BottomSheetBackdrop } from '@gorhom/bottom-sheet'
import { useCallback, useMemo } from 'react'
import { Text } from 'react-native'
import { ContainerData } from './styles'

interface Props {
  refCar: any
  car: any
}

export const ModalCar = ({ refCar, car }: Props) => {
  const snapPoints = useMemo(() => ['25%', '50%'], [])

  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index)
  }, [])

  const renderBackdrop = useCallback(
    (props: any) => <BottomSheetBackdrop {...props} disappearsOnIndex={-1} appearsOnIndex={0} />,
    []
  )

  return (
    <BottomSheetModal
      ref={(ref) => {
        refCar.current = ref
      }}
      index={0}
      snapPoints={snapPoints}
      onChange={handleSheetChanges}
      backdropComponent={renderBackdrop}
    >
      <ContainerData>
        <Text>{car?.name}</Text>
      </ContainerData>
    </BottomSheetModal>
  )
}
