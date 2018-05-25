import React from 'react';
import {
  AutocompleteInput,
  Create,
  DateField,
  DateInput,
  DisabledInput,
  Edit,
  //EditButton,
  Filter,
  List,
  LongTextInput,
  ReferenceField,
  ReferenceInput,
  Responsive,
  SelectInput,
  SimpleList,
  SimpleForm,
  TextField,
  TextInput,
  minLength,
  translate,
  Show,
  ShowButton,
  SimpleShowLayout,
} from 'react-admin';
import PersonIcon from '@material-ui/icons/Person';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

import Button from '@material-ui/core/Button';
import { Toolbar, ToolbarGroup } from '@material-ui/core/Toolbar';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';

const CommentFilter = ({ ...props }) => (
  <Filter {...props}>
    <ReferenceInput source="post_id" reference="posts">
      <SelectInput optionText="title" />
    </ReferenceInput>
  </Filter>
);

const CommentPagination = translate(
  ({ page, perPage, total, setPage, translate }) => {
    const nbPages = Math.ceil(total / perPage) || 1;
    return (
      nbPages > 1 && (
        <Toolbar>
          <ToolbarGroup>
            {page > 1 && (
              <Button
                size={'small'}
                key="prev"
                label={translate('aor.navigation.prev')}
                icon={<ChevronLeft />}
                onClick={() => setPage(page - 1)}
              />
            )}
            {page !== nbPages && (
              <Button
                size={'small'}
                key="next"
                label={translate('aor.navigation.next')}
                icon={<ChevronRight />}
                onClick={() => setPage(page + 1)}
                labelPosition="before"
              />
            )}
          </ToolbarGroup>
        </Toolbar>
      )
    );
  },
);

const cardStyle = {
  width: 300,
  minHeight: 300,
  margin: '0.5em',
  display: 'inline-block',
  verticalAlign: 'top',
};

const CommentGrid = translate(({ ids, data, basePath, translate }) => (
  <div style={{ margin: '1em' }}>
    {ids.map(id => (
      <Card key={id} style={cardStyle}>
        <CardContent
          title={<TextField record={data[id]} source="author.name" />}
          subtitle={<DateField record={data[id]} source="created_at" />}
          avatar={<Avatar icon={<PersonIcon />} />}
        />
        <CardContent>
          <TextField record={data[id]} source="body" />
        </CardContent>
        <CardContent>
          {translate('comment.list.about')}&nbsp;
          <ReferenceField
            resource="comments"
            record={data[id]}
            source="post_id"
            reference="posts"
            basePath={basePath}
          >
            <TextField source="title" />
          </ReferenceField>
        </CardContent>
        <CardActions style={{ textAlign: 'right' }}>
          {/* <EditButton resource="posts" basePath={basePath} record={data[id]} /> */}
          <ShowButton resource="posts" basePath={basePath} record={data[id]} />
        </CardActions>
      </Card>
    ))}
  </div>
));

CommentGrid.defaultProps = {
  data: {},
  ids: [],
};

const CommentMobileList = props => (
  <SimpleList
    primaryText={record => record.author.name}
    secondaryText={record => record.body}
    secondaryTextLines={2}
    tertiaryText={record => new Date(record.created_at).toLocaleDateString()}
    leftAvatar={() => <Avatar icon={<PersonIcon />} />}
    {...props}
  />
);

export const CommentList = ({ ...props }) => (
  <List
    {...props}
    perPage={6}
    filters={<CommentFilter />}
    pagination={<CommentPagination />}
  >
    <Responsive small={<CommentMobileList />} medium={<CommentGrid />} />
  </List>
);

export const CommentEdit = ({ ...props }) => (
  <Edit {...props}>
    <SimpleForm>
      <DisabledInput source="id" />
      <ReferenceInput
        source="post_id"
        reference="posts"
        perPage={5}
        sort={{ field: 'title', order: 'ASC' }}
      >
        <AutocompleteInput optionText="title" />
      </ReferenceInput>
      <TextInput source="author.name" validate={minLength(10)} />
      <DateInput source="created_at" />
      <LongTextInput source="body" validate={minLength(10)} />
    </SimpleForm>
  </Edit>
);

export const CommentCreate = ({ ...props }) => (
  <Create {...props}>
    <SimpleForm defaultValue={{ created_at: new Date() }}>
      <ReferenceInput
        source="post_id"
        reference="posts"
        allowEmpty
        validation={{ required: true }}
      >
        <SelectInput optionText="title" />
      </ReferenceInput>
      <DateInput source="created_at" />
      <LongTextInput source="body" />
    </SimpleForm>
  </Create>
);

export const CommentShow = ({ ...props }) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="id" />
      <ReferenceField source="post_id" reference="posts">
        <TextField source="title" />
      </ReferenceField>
      <TextField source="author.name" />
      <DateField source="created_at" />
      <TextField source="body" />
    </SimpleShowLayout>
  </Show>
);
