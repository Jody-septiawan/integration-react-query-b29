import React, { useState, useEffect, createElement } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useParams, useHistory } from "react-router";

import NavbarAdmin from "../components/NavbarAdmin";
import CheckBox from "../components/form/CheckBox";

import dataProduct from "../fakeData/product";

// Import useQuery and useMutation here ...

// Get API config here ...

export default function UpdateProductAdmin() {
  const title = "Product admin";
  document.title = "DumbMerch | " + title;

  let history = useHistory();
  let api = API();
  const { id } = useParams();

  const [categories, setCategories] = useState([]); //Store all category data
  const [categoryId, setCategoryId] = useState([]); //Save the selected category id
  const [preview, setPreview] = useState(null); //For image preview
  const [product, setProduct] = useState({}); //Store product data

  // Create variabel for store data with useState here ...

  // Create process for handle fetching detail product data by id from database with useQuery here ...
  // Create process for handle fetching category data from database with useQuery here ...

  // Create function for handle if category selected here ...

  // Create function for handle change data on form variabel here ...

  // Create function for handle insert new product data with useMutation here ...

  useEffect(() => {
    const newCategoryId = product?.categories?.map((item) => {
      return item.id;
    });

    setCategoryId(newCategoryId);
  }, [product]);

  return (
    <>
      <NavbarAdmin title={title} />
      <Container className="py-5">
        <Row>
          <Col xs="12">
            <div className="text-header-category mb-4">Update Product</div>
          </Col>
          <Col xs="12">
            <form onSubmit={(e) => handleSubmit.mutate(e)}>
              {!preview ? (
                <div>
                  <img
                    src={form.image}
                    style={{
                      maxWidth: "150px",
                      maxHeight: "150px",
                      objectFit: "cover",
                    }}
                  />
                </div>
              ) : (
                <div>
                  <img
                    src={URL.createObjectURL(preview[0])}
                    style={{
                      maxWidth: "150px",
                      maxHeight: "150px",
                      objectFit: "cover",
                    }}
                  />
                </div>
              )}
              <input
                type="file"
                id="upload"
                name="image"
                hidden
                onChange={handleChange}
              />
              <label for="upload" className="label-file-add-product">
                Upload file
              </label>
              <input
                type="text"
                placeholder="Product Name"
                name="name"
                onChange={handleChange}
                value={form.name}
                className="input-edit-category mt-4"
              />
              <textarea
                placeholder="Product Desc"
                name="desc"
                onChange={handleChange}
                value={form.desc}
                className="input-edit-category mt-4"
                style={{ height: "130px" }}
              ></textarea>
              <input
                type="number"
                placeholder="Price (Rp.)"
                name="price"
                onChange={handleChange}
                value={form.price}
                className="input-edit-category mt-4"
              />
              <input
                type="number"
                placeholder="Stock"
                name="qty"
                onChange={handleChange}
                value={form.qty}
                className="input-edit-category mt-4"
              />

              <div className="card-form-input mt-4 px-2 py-1 pb-2">
                <div
                  className="text-secondary mb-1"
                  style={{ fontSize: "15px" }}
                >
                  Category
                </div>
                {product &&
                  categories.map((item) => (
                    <label class="checkbox-inline me-4">
                      <CheckBox
                        categoryId={categoryId}
                        value={item.id}
                        handleChangeCategoryId={handleChangeCategoryId}
                      />
                      <span className="ms-2">{item.name}</span>
                    </label>
                  ))}
              </div>

              <div className="d-grid gap-2 mt-4">
                <Button type="submit" variant="success" size="md">
                  Save
                </Button>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    </>
  );
}