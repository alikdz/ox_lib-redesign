import { Checkbox, createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  input: {
    backgroundColor: 'rgba(6, 25, 0, 0.8)',
    border: `1px solid ${'rgba(65, 255, 0, 0.3)'}`,
    '&:checked': { backgroundColor: 'rgba(65, 255, 0, 0.3)', borderColor: 'rgba(65, 255, 0, 0.3)' },
  },
  inner: {
    '> svg > path': {
      fill: '#FFFF',
    },
  },
}));

const CustomCheckbox: React.FC<{ checked: boolean }> = ({ checked }) => {
  const { classes } = useStyles();
  return (
    <Checkbox
      checked={checked}
      size="md"
      classNames={{ root: classes.root, input: classes.input, inner: classes.inner }}
    />
  );
};

export default CustomCheckbox;
