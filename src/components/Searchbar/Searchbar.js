
import { Formik } from 'formik';
import { Field, Form, FormButton, Wrapper } from './Searchbar.styled';
import { IoIosSearch } from 'react-icons/io';

export const Searchbar = ({onSubmit}) => {
    return (
      <div>
        <Formik
          initialValues={{
            search: '',
          }}
          onSubmit={(values) => {
            onSubmit(values.search);
          }}
        >
          <Form>
            <Wrapper>
              <Field
                id="search"
                name="search"
                placeholder="Search images and photos"
              />
              <FormButton type="submit">
                <IoIosSearch size="24" />
              </FormButton>
            </Wrapper>
          </Form>
        </Formik>
      </div>
    );
}